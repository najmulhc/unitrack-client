 
import Menubar from "./components/Menubar";
import PageContainer from "./components/PageContainer";
 

const ReleaseHome = () => {
  return (
    <>
      <PageContainer>
        {" "}
       
        <div>
          <label htmlFor="input">
            <input type="text" name="" id="" />
          </label>
        </div>
        <section>
          <h2>course title</h2>
          <p>Teacher</p>

          <div>
            <h2>Resorces</h2>
            <button>add</button>
          </div>

          <div>
            <h2>Textbooks</h2>
            <div>
              <button>book 1</button>
            </div>
          </div>

          <div>
            <h2>Slides</h2>
            <div>
              <p>Chapter 1</p>
              <span>Slide</span>
              <button>visit</button>
            </div>
          </div>
        </section>{" "}
      </PageContainer>

      <Menubar />
    </>
  );
};

export default ReleaseHome;
