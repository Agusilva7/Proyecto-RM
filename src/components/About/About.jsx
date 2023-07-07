import Style from "./About.module.css"

const About=()=>{
    return (
        <div>
            <div className={Style.imagen}><img src="https://iili.io/HiAeyVn.md.jpg" /></div>
            <div className={Style.datos}>
                
                <h2 className={Style.titulo}>Agustin Silva</h2>
            </div>

           <section className={Style.p}>
                <p className={Style.texto}>Sobre mi:
                    Hola buenas me llamo Agustin silva tengo 20 años y estoy estudiando Programacion en SoyHenry , esta página la hice con los conocimientos aprendidos en este Bootcamp.
                </p>
           </section>
           <a className={Style.a} href="https://www.instagram.com/agustinsilva7/?hl=es" target="_blank" >Mi instagram</a>
        </div>
        )
}

export default About; 