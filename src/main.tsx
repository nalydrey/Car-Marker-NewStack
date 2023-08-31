import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import { ApolloProvider } from '@apollo/client/react'
import { apolloClient } from './apolloClient.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ApolloProvider client = {apolloClient}>
        <App />
    </ApolloProvider>
)
