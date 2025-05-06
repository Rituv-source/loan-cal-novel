import "../Errorpage/Errorpage.css"
function Errorpage()
{
    return (
    <>
    <div className="justify-content-center align-items-center text-center errorpage-box">
    <p className="fs-3 errorpage">Something went wrong in the application.</p>
    <button className="errorpage-but border-4 rounded" onClick={()=>{document.location.href="http://localhost:5173/"}}>GO HOME</button>
    </div>
    </>
    );
}
export default Errorpage;