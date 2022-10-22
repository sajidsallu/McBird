import React from 'react'
import './Layout.scss'

export default function Layout({ children }) {
    return (
        <div className="layout-container" >
            {children}
        </div>
    )
}
