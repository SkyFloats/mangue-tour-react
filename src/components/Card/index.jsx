import { CardContainer } from "./styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ name, description, link, points }) => {
    return (
      <CardContainer>
        <img src={link} alt={name}/>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <ul>
            {points.map((point, index)=> (
                <li key={index}>
                    <PointName>{point.name}</PointName> - <PointCategory>{point.category}</PointCategory>
                </li>
            ))}
          </ul>
        </div>
        <DeleteButton to="/delete">Excluir</DeleteButton>
      </CardContainer>
    );
  };

const DeleteButton = styled(Link)`
    background-color: #ff4d4f;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 10px;
    width: 100px;
    align-self: flex-end;
    &:hover {
        background-color: #ff7875;
    }
`;
const PointName = styled.span`
    font-weight: bold;
    color: #333;
`;

const PointCategory = styled.span`
    font-size: 14px;
    color: #fff;
    padding: 5px 10px;
    background-color: #333;
    border-radius: 8px;
`;
export default Card;
