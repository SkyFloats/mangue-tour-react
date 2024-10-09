import {
    PageContainer,
    ProfileSection,
    ProfileImage,
    ProfileDetails,
    ProfileName,
    ProfileInfo,
    CardList
} from './styles.js';
import Card from '../../components/Card';
import profileimg from "../../assets/profile.jpg"
import imagemRota1 from '../../assets/rota1.png'
import imagemRota2 from '../../assets/rota2.png'

function ListPage() {
    return (
        <PageContainer>
            <ProfileSection>
                <ProfileImage src={profileimg} alt="Foto da pessoa" />
                <ProfileDetails>
                    <ProfileName>João da Silva</ProfileName>
                    <ProfileInfo>Email: joao.silva@example.com</ProfileInfo>
                    <ProfileInfo>Telefone: (81) 99999-9999</ProfileInfo>
                </ProfileDetails>
            </ProfileSection>

            <CardList>
                <Card
                    name="Rota Romântica"
                    description="A Rota Romântica segue pelos principais pontos turísticos da cidade, como parques, restaurantes e praças."
                    link={imagemRota1}
                    points={[
                        { name: 'Praça do Amor', category: 'Praça' },
                        { name: 'Restaurante Bela Vista', category: 'Restaurante' },
                        { name: 'Igreja São Pedro', category: 'Religioso' },
                    ]}
                />
                <Card
                    name="Rota Gastronômica"
                    description="A Rota Gastronômica passa por uma variedade de restaurantes locais que oferecem comida típica."
                    link={imagemRota2}
                    points={[
                        { name: 'Restaurante Sabor do Nordeste', category: 'Restaurante' },
                        { name: 'Cafeteria Central', category: 'Café' },
                        { name: 'Mercado Central', category: 'Mercado' },
                    ]}
                />
            </CardList>
        </PageContainer>
    );
}

export default ListPage;