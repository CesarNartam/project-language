import './App.css'
import Language from './components/Language'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <Layout>
        <div>
        <h1>La importancia de la lengua en el mundo</h1>
        <br></br>
        <h4>Pensar en la lengua únicamente desde la ortografía o la sintaxis es restarle un carácter trascendental que solemos no tener en consideración. Todos los idiomas están íntimamente arraigados con una cultura y, por lo tanto, representan en gran medida lo que somos como grupos sociales.</h4>
        <br></br>
        <h4>A continuación, los 10 lenguajes más populares alrededor del mundo.</h4>
        <Language 
        placement = '1'
        spokenLanguage = 'Inglés'
        quantity = '1.348'
        notation = 'mil millones'
        description = 'Es el idioma oficial de muchos países que cualquier otro idioma. Sus hablantes provienen de todas partes del mundo, incluyendo Nueva Zelanda, el Caribe, Hong Kong, Sudáfrica y Canadá. La relativa facilidad con la que este idioma puede ser aprendido (a diferencia del Mandarín) y el poder de la cultura estadounidense significa que el Inglés continuarádominando el mundo en el futuro próximo'
        image = 'english.png'
        />
        <Language 
        placement = '2'
        spokenLanguage = 'Mandarín'
        quantity = '1.120'
        notation = 'mil millones'
        description = 'Aprender mandarín puede ser difícil, debido a que cada palabra puede ser pronunciada de cuatro maneras (o "tonos"), y un aprendiz invariablemente tendrá problemas distinguiendo una de la otra. El mandarín ha dejado de ser el lenguaje más popular debido a la creciente ola del inglés y su importancia en el mundo.'
        image = 'mandarin.png' />
        <Language 
        placement = '3'
        spokenLanguage = 'Hindi'
        quantity = '600'
        notation = 'millones'
        description = 'Es la lengua primaria de la gran población de India, y trae consigo un enorme número de dialectos(de los cuales, la mayoría es hablado en Hindi). Mientras muchos predicen que la población de India pasará a la de China pronto, la prominencia del Inglés en la India impide al Hindi convertirse en el lenguaje más popular del mundo.'
        image = 'hindi.png'
        />
        <Language 
        placement = '4'
        spokenLanguage = 'Español'
        quantity = '543'
        notation = 'millones'
        description = 'El español se encuentra entre los lenguajes más populares debido a que es una lengua romance(proveniente del Latín), además de que casi domina un continente entero(México y Sudamérica, sin mencionar España, Cuba y gran parte de Estados Unidos; este último debido a la inmigración).'
        image = 'spanish.png'
        />
        <Language 
        placement = '5'
        spokenLanguage = 'Arábico'
        quantity = '274'
        notation = 'millones'
        description = 'El lenguaje Arábico es altamente hablado en Medio Oriente, con hablantes en países como Arabia, Kuwait, Irak, Siria, Jordania, Egipto y el Líbano. El lenguaje Árabe es el lenguaje del Corán, con millones de musulmanes en otros países hablando el mismo idioma.'
        image = 'arabic.png'
        />
        <Language 
        placement = '6'
        spokenLanguage = 'Bengalí'
        quantity = '268'
        notation = 'millones'
        description = 'En Bangladesh, un país con más de 120 millones de habitantes, se habla Bengalí. Y por mencionar que Bangladesh está virtualmente rodeado por India(donde la población crece demasiado rápido), el número de hablantes de la lengua es mucho más alto de lo que la gente podría llegar a creer.'
        image = 'bengali.png'
        />
        <Language 
        placement = '7'
        spokenLanguage = 'Francés'
        quantity = '267'
        notation = 'millones'
        description = 'Usualmente llamado el lenguaje más romántico en el mundo, el Francés es bastante conocido. Hablado en múltiples países como Bélgica, Canadá, Rwanda, Camerún, Haití y obviamente Francia'
        image = 'french.png'
        />
        <Language 
        placement = '8'
        spokenLanguage = 'Ruso'
        quantity = '258'
        notation = 'millones'
        description = 'Famoso por su inescrutable gramática y el tan querido alfabeto cirílico, el Ruso se mantiene como uno de los lenguajes más recurrentes en el mundo. No solamente es hablado en la Madre Patria Rusa, si no también en Bielorrusia, Kazajistán y algunas partes de Estados Unidos.'
        image = 'russian.png'
        />
        <Language 
        placement = '9'
        spokenLanguage = 'Portugués'
        quantity = '258'
        notation = 'millones'
        description = 'Piensa en el Portugués como el pequeño lenguaje que pudo. En el siglo XII, Portugal ganó su independencia de España y se expandió en todo el mundo con la ayuda de varios exploradores; debido a sus exploraciones, el lenguaje se estableció en múltiples partes del mundo, especialmente en Brasil, además de Macao, Angola, Venezuela y Mozambique.'
        image = 'portuguese.png'
        />
        <Language 
        placement = '10'
        spokenLanguage = 'Urdu'
        quantity = '230'
        notation = 'millones'
        description = 'El urdu, también conocido como Lashkari, es un idioma hablado mayoritariamente en Pakistán e India. En Pakistán está considerada lengua nacional, mientras que en India es uno de los 24 idiomas oficiales en el país.'
        image = 'urdu.png'
        />
        </div>
      </Layout>
    </div>
  )
}

export default App;
