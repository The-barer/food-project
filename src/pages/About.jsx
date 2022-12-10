
export const About = () => {
    return (
        <>
            <h3>About Page</h3>
            <div
                className="card"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "800px",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: '0 auto'
                }}
            >
                <div className="card-image">
                    <img
                        src="https://avatars.githubusercontent.com/u/65025248?v=4"
                        alt={"TheBarer"}
                        style={{
                            borderRadius: "50%",
                            cursor:'pointer'
                        }}
                        onClick={()=>window.open('https://github.com/The-barer/', '_blank').focus()}
                        
                    />
                </div>
                <div className="card-content" style={{ flexGrow: 1 }}>
                    <span className="card-title" style={{fontWeight: 'bold'}}>TheBarer</span>
                    <p>FPV Pilot, Acrobat, Teacher, Frontender, ProjectManager... etc</p>
                </div>
                <div className="card-action" >
                    <a
                        className="btn"
                        href="https://github.com/The-barer/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        className="btn"
                        href="https://t.me/Thebarer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{marginLeft: '10px'}}
                    >
                        Telegram
                    </a>
                </div>
            </div>
        </>
    );
};
