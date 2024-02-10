import { useTitle } from "../hooks/useTitle";
import {Card} from "../components/Card";
import {useFetch} from "../hooks/useFetch";



export const MovieList = ({apiPath,title}) => {
//api is prop from Allroutes (i.e route props can be accessed anywhere)
 
  const {data:movies}=useFetch(apiPath);//here data is the array returned by our custom hook usefetch movies after semicolon with data is our identifier.
  
  const pageTitle=useTitle(title);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly"> 
           { movies.map((movie)=>(
            <Card key={movie.id} movie={movie} /> // Card component has props id and movie (i.e movie is running var which holds individual movie datas in result)
           )
           )}
        
        </div>
        
      </section>
      </main>
  )
}
