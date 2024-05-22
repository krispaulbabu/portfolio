import { useRouter } from "next/router";
import { stringify } from "querystring";
import dynamic from "next/dynamic";
import Image from "next/image";
import "/src/css/bookresults.css";

const ResultsPage = () => {
  const router = useRouter();
  const data = stringify(router.query); // 'data' is the name of the query parameter
  let results=[{}]

  // Optionally parse the data if it's in JSON format

  if(data!=""){
    results = JSON.parse(decodeURIComponent(data).substring(7));
  }

  console.log(results);
  return (
    <>
      <div className="results">
        {results.map((values: any) => (
          <div 
          className="book"
          key={values["id"]}
          >
            <Image
              className="resultImage"
              height={300}
              width={230}
              alt="Image of book cover"
              src={values["thumbnail"]}
            ></Image>
            <h3 className="title">{values["title"]}</h3>
            <h4 className="author">{values["authors"]}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResultsPage;
