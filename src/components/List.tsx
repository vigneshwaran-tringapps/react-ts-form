import React from "react";
import { IState as IProps } from "./../App"


const List:React.FC<IProps>=({people}) => {
    const renderList=():JSX.Element[]=>{
        return people.map((person)=>{
            return(
                <li className="table-list">
                <div className="content">
                    <img className="list-image" src={person.url} alt="no iamge"></img>
                    <h2 className="list-name">{person.name}</h2>
                    <p className="age">{person.age}year</p>
                    <p className="note">{person.note}</p>
                    
                </div>
            </li>

            )
        })
    }
    return(
        <ul>
            {renderList()}
        </ul>
    )
    
    
    
}

export default List