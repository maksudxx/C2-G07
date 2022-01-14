import './App.css';
import { Header } from './components/Header/Header';
import Home from './views/Home/Home';
import { Landing } from './views/Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Footer } from './components/Footer/Footer';
import { PerfilUsuario } from './views/PerfilUsuario/PerfilUsuario';
import { InformacionObraArte } from './views/informacionObraArte/InformacionObraArte';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route path='/galeria' element={<Home />} />
				<Route path='/usuario/:id' element={<PerfilUsuario/>}/>
				<Route path='/obraArte/:id' element={<InformacionObraArte/>}/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
