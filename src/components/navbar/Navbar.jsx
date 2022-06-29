import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { IoSearchOutline, IoGlobeOutline, IoPersonAdd } from 'react-icons/io5';
import { FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';


const Navbar = () => {
    const [search, setSearch] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);


    useEffect(() => {
        axios.get("https://fortniteapi.io/v2/items/list?lang=en", {
            headers: {
                Authorization: "0c13c2aa-0a2cec03-b5455c56-766ae857"
            }
        })
            .then(res => {
                setData(res.data.items)
            })
            .catch(err => console.log(err))

    }, []);
    console.log(data)

    useEffect(() => {
        let filterData = data.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase())).slice(0, 6)
        // console.log(filterData);
        setSearchData(filterData)
    }, [inputValue])

    return (
        <div className='navbar_wrapper'>
            <div className='nav_logo_wrapper'>
                <NavLink to="/">
                    <div className='nav_logo'></div>
                </NavLink>
            </div>
            <div className='logo_fortnite'></div>
            <div className='nav_items'>
                <ul className='nav_lists' style={search ? { display: "none" } : { display: "flex" }}>
                    <li className='nav_list_text1'>MODES
                        <div className='down_list'>
                            <ul className='down_list_items'>
                                <li>BATTLE ROYALE</li>
                                <li>ZERO BUILD</li>
                                <li>CREATIVE</li>
                                <li>SAVE THE WORLD</li>
                            </ul>
                        </div>
                    </li>
                    <li className='nav_list_text'><NavLink to="/product">BATTLE PASS</NavLink></li>
                    <li className='nav_list_text'>CREW</li>
                    <li className='nav_list_text'>V-BUCKS</li>
                    <li className='nav_list_text'>COMPETITIVE</li>
                    <li className='nav_list_text'>NEWS</li>
                    <li className='nav_list_text'>MEWCH</li>
                    <li className='nav_list_text'>COSPLAY</li>
                    <li className='nav_list_text'>HELP</li>
                </ul>
            </div>
            <div className={search ? "search_icon showSearch" : "search_icon"} >
                <input type="text" placeholder='Search...'
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue} />
                <div className="search_result" style={{ display: inputValue.trim() ? "block" : "none" }}>
                    {
                        searchData.length ? searchData?.map((item, index) =>
                            <Link 
                            key={index} 
                            to={`/product/${item.id}`} 
                            className="search_link"
                            onClick={() => {
                                setInputValue("")
                                setSearch(false)
                            }}> 
                            <img width="50" src={item.images.background} alt="" />
                            <span> {item.name} </span>
                            </Link>
                        )
                        :
                            <p>not found</p>
                    }
                </div>
                {
                    search ? <FiX onClick={() => {
                        setInputValue("")
                        setSearch(p => !p)
                    }} />
                        :
                        <IoSearchOutline onClick={() => setSearch(p => !p)} />
                }
            </div>
            <div className="world_icon">
                <IoGlobeOutline />
            </div>
            <div className='login'>
                <IoPersonAdd /> <p>SIGN IN</p>
            </div>
            <button className='download_btn'>DOWNLOAD</button>
        </div>
    )
}

export default Navbar