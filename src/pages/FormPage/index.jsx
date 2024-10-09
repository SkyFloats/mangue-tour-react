import imagemRota from '../../assets/rotas.png'
import { Page, MainContent, Title, Form, Label, Input, MapImage, ConnectionSection, AddButton, ConnectionList, SubmitButton } from './styles'

function FormPage() {
    return (
        <Page>
            <MainContent>
                <Title>Cadastro de Rotas</Title>

                <Form>
                    <MapImage src={imagemRota} alt="Mapa da Rota" />

                    <Label htmlFor="local">Nome do Local</Label>
                    <Input type="text" placeholder="Nome do Local" />

                    <Label htmlFor="categoria">Categoria</Label>
                    <Input type="text" placeholder="Categoria (Ex.: Hotel, Restaurante, Igreja, etc.)" />

                    <Label htmlFor="caracteristicas">Características</Label>
                    <Input type="text" placeholder="Características (Ex.: Religioso, Natural, Clássico, etc.)" />

                    <ConnectionSection>
                        <h3>Conexões do Planejamento:</h3>
                        <AddButton type="button">+ Adicionar Ponto</AddButton>
                    </ConnectionSection>

                    <ConnectionList>
                        <p>Ponto 1: Hotel - Categoria: Alojamento</p>
                        <p>Ponto 2: Restaurante - Categoria: Alimentação</p>
                    </ConnectionList>

                    <SubmitButton type="submit">Salvar Rota</SubmitButton>
                </Form>
            </MainContent>
        </Page>
    )
}

export default FormPage
