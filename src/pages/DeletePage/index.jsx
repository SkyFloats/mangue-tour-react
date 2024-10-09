import { DeletePageContainer, WarningText, ConfirmButton, CancelButton } from './styles'

function DeletePage() {

    const handleConfirm = () => {
        alert('Rota excluída!');
    };

    const handleCancel = () => {
    };

    return (
        <DeletePageContainer>
            <div>
                <WarningText>Tem certeza que deseja excluir essa rota?</WarningText>
                <div>
                    <ConfirmButton onClick={handleConfirm} to="/list">Confirmar</ConfirmButton>
                    <CancelButton onClick={handleCancel} to="/list">Cancelar</CancelButton>
                </div>
            </div>

        </DeletePageContainer>
    );
}

export default DeletePage
