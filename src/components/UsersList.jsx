// eslint-disable-next-line
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons'

export const UsersList = function (props) {

    const [users, setUsers] = useState([]);
    const [sortType, setSortType] = useState('asc');
    const [userNameFilter, setUserNameFilter] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(function () {
        async function getUsers() {
            try {
                axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem("token")}`;
                let response = await axios.get('https://emphasoft-test-assignment.herokuapp.com/api/v1/users',
                    {});
                setUsers(response.data);
                setFilteredUsers(response.data);
            } catch (e) {
                console.log(e);
            }

        }

        getUsers();
    }, []);

    const list = filteredUsers.map((el) => {
        return <li key={el.id} className="list-group-item">{el.id}: {el.username}</li>
    });

    function handleInputChange(event) {
        let temp = users.concat();
        setUserNameFilter(event.target.value);
        setFilteredUsers(temp.filter(el=>el.username.indexOf(event.target.value)!==-1));
    }

    function idSort() {
        let temp = filteredUsers.concat();
        if (sortType === 'asc') {
            temp.sort((a, b) => (a.id - b.id));
        } else {
            temp.sort((a, b) => (b.id - a.id));
        }

        setFilteredUsers(temp);
        setSortType(sortType === 'asc' ? 'desc' : 'asc');
    }


    const arrowUpIcon = <FontAwesomeIcon icon={faAngleUp}/>;
    const arrowDownIcon = <FontAwesomeIcon icon={faAngleDown}/>;

    return (
        <div className="container">
            <div className="row my-3 justify-content-between">
                <div className="col-3 px-0 align-self-center">
                    <button onClick={idSort} className="btn btn-primary w-100">
                        <span className="pr-2">Сортировка по id</span>
                        {(sortType === 'asc') ? arrowUpIcon : arrowDownIcon}
                    </button>
                </div>
                <div className="col-9 pr-0 align-self-center">
                    <input onChange={handleInputChange} name="username" placeholder="Поиск по имени"
                           className="form-control"/>
                </div>
            </div>
            <div className="row">
                <ul className="list-group col-12 pr-0">
                    {list}
                </ul>
            </div>
        </div>
    );
};