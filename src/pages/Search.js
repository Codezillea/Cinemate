import { useSearchParams } from "react-router-dom";
import {Card} from "../components/Card";
import {useFetch} from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import noResult from "../assets/images/sad.webp";

export const Search = ({apiPath}) => {

  const [searchParams]=useSearchParams();
  
  const queryTerm= searchParams.get("q");//q is the query in searchParams ,whatever that is searched that entity can be accesed from the url generated after clicking search button

  const {data:movies}=useFetch(apiPath,queryTerm);//here data is the array returned by our custom hook usefetch movies after semicolon with data is our identifier.
  useTitle(`Search result for ${queryTerm}`);

  
  return (
    <main>
      <section py-7>
        <div className="">
       
          {movies.length === 0 ? (
            <div>
                <p className="text-3xl text-gray-700 dark:text-white">{`No results found for '${queryTerm}'`}</p>
                <img className="mx-auto my-12 " src={noResult} alt="" />
            </div>
        ) : 
        <div>
          <p className="text-3xl text-gray-700 dark:text-white">{`Results found for '${queryTerm}'`}</p>

        </div>
          }
        </div>

       
      </section>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap  ">
         { movies.map((movie)=>(
          <Card key={movie.id} movie={movie} /> // Card component has props id and movie (i.e movie is running var which holds individual movie datas in result)
         )
         )}
      
      </div>
      
    </section>
    </main>
  )
}
