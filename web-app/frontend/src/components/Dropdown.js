import { useEffect, useState } from "react";

export default function Dropdown({username, setSelectedIngredients}) {
	console.log(username)
	const [ingredients, setIngredients] = useState([])
    const [allProdsInfo, setAllProdsInfo] = useState({})
	const [item0, setItem0] = useState({})
	const [item1, setItem1] = useState({})
	const [item2, setItem2] = useState({})
	const [item3, setItem3] = useState({})
	const [item4, setItem4] = useState({})
	const [item5, setItem5] = useState({})
	const [item6, setItem6] = useState({})
	const [item7, setItem7] = useState({})
	const [item8, setItem8] = useState({})
	const [item9, setItem9] = useState({})

	useEffect(()=>{
		getAllProdsInfo()
	}, [])

	const getAllProdsInfo = async() => {
        try {
            const url = "http://localhost:5000/api/rawmaterial/fetchallproducts"
            const response = await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                }
            });
            const data = await response.json();
            setAllProdsInfo(data)
            for(let i=0; i<data.length; i++) {
                if(data[i].manufacturer === username) {
                    setIngredients(Array.from(ingredients.push({productName: data[i].productName, quantity: data[i].quantity, isSelected: false, productId:data[i].productId})))
                }
            }
            console.log(ingredients)
			setItem0(ingredients[0])
			setItem1(ingredients[1])
			setItem2(ingredients[2])
			setItem3(ingredients[3])
			setItem4(ingredients[4])
			setItem5(ingredients[5])
			setItem6(ingredients[6])
			setItem7(ingredients[7])
			setItem8(ingredients[8])
			setItem9(ingredients[9])
        }
        catch(err) {
            console.log(err)
        }
    }

	const handleIngredients = (e) => {
		let value = Array.from(e.target.selectedOptions, option => option.value);
		console.log(value)
		setSelectedIngredients(value)
	}
  
    return (
		<select className="form-select select-box select-wrapper" name="ingredients" onChange={handleIngredients} multiple required>
			{item0 && item0.quantity !== 0 && <option value={item0.productName + '|' + item0.quantity + '?' + item0.productId}>{item0.productName}</option>}
			{item1 && item1.quantity !== 0 && <option value={item1.productName + '|' + item1.quantity + '?' + item1.productId}>{item1.productName}</option>}
			{item2 && item2.quantity !== 0 && <option value={item2.productName + '|' + item2.quantity + '?' + item2.productId}>{item2.productName}</option>}
			{item3 && item3.quantity !== 0 && <option value={item3.productName + '|' + item3.quantity + '?' + item3.productId}>{item3.productName}</option>}
			{item4 && item4.quantity !== 0 && <option value={item4.productName + '|' + item4.quantity + '?' + item4.productId}>{item4.productName}</option>}
			{item5 && item5.quantity !== 0 && <option value={item5.productName + '|' + item5.quantity + '?' + item5.productId}>{item5.productName}</option>}
			{item6 && item6.quantity !== 0 && <option value={item6.productName + '|' + item6.quantity + '?' + item6.productId}>{item6.productName}</option>}
			{item7 && item7.quantity !== 0 && <option value={item7.productName + '|' + item7.quantity + '?' + item7.productId}>{item7.productName}</option>}
			{item8 && item8.quantity !== 0 && <option value={item8.productName + '|' + item8.quantity + '?' + item8.productId}>{item8.productName}</option>}
			{item9 && item9.quantity !== 0 && <option value={item9.productName + '|' + item9.quantity + '?' + item9.productId}>{item9.productName}</option>}
			{/* <option value={"Red Chillies|500"}>Red Chillies</option>
			<option value={"Coconut|100"}>Coconut</option> */}
		</select>
    );
}