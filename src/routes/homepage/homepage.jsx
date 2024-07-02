import './homepage.scss'

function HomePage(){
    return (
    <div className="homepage">
        <div className="textContainer">
            <div className="wrapper">
                <h1>Find & Get Your Dream Place</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptas accusantium commodi, facere accusamus distinctio incidunt
                    architecto mollitia quas quo similique tempore modi praesentium odit,
                    amet, excepturi aspernatur corrupti autem nemo.!!</p>
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Awards gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
            

        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt=""></img>
        </div>
    </div>
    )
}

export default HomePage;