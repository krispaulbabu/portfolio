import { useRouter } from "next/router";
import { stringify } from "querystring";
import Image from "next/image";
import "/src/css/bookresults.css";

const ResultsPage = () => {
  const router = useRouter();
  const data = stringify(router.query); 
  let results=[{}]


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
