import './styles.css'
import MainContent from '../../components/MainContent'

function HomePage() {



    return (
        <div>
            <MainContent title="Bem-Vindo ao Mangue Tour" content="O Mangue Tour é um aplicativo/site de turismo do centro de Recife. Ele foi/será feito para ajudar aqueles que buscam vir a Recife e desfrutar do seu turismo. No entanto, o Mangue Tour não se limita a apenas informar ou ajudar. O aplicativo procura criar uma conexão emocional com cada visitante, trazendo fé e criando memórias afetivas. O objetivo é proporcionar uma ligação completa com cada turista, promovendo diversidade e afeto por todo lugar, história, comida e fé."></MainContent>
            <div className='container'>
                <div className='content'>
                    <h2 className='title'>
                        Atributos da Marca
                    </h2>
                    <p className='subtitle'>
                        Diversidade: trazendo diversas áreas do turismo, para diferentes públicos.
                        Regionalidade: por ser uma marca feita e criada para Recife.
                        Emocional: sendo o apelo principal da marca e seu principal diferencial, pois diferentes dos outros buscamos não somente levar o conhecimento mas também a conexão com a fé, a história e as comidas regionais.
                        Trazer novas perspectivas: toda vez que se fala de turismo em Recife só se pensa nas praias, tubarões ou pobreza. Então buscamos não focar no comum
                    </p>
                </div>

            </div>
        </div>
    )
}

export default HomePage
