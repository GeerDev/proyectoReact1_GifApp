import React, {useState} from 'react'; 

import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

	const [categorias, setcategorias] = useState(['Gatitos'])
	
	return (
	   <> 
		<h2>Gifs App</h2>
		<AddCategory propiedad = { setcategorias } />
		<hr/>

		<ol>
		{

			categorias.map (category => (
				<GifGrid 
				key={ category }
				category={ category }
				/>
				))

		}
		</ol>
	   </>
		);

}
