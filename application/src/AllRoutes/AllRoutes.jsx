import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductsPage } from '../Components/ProductsPage'
import { HomePage } from '../Components/HomePage'
import { Logo } from '../Components/Logo'



export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logo" element={<Logo />} />
            <Route path="/products" element={<ProductsPage />} />

        </Routes>
    )
}
