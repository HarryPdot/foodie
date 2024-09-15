'use client'
import { Container } from "@radix-ui/themes"
import { SearchBar } from "../SearchBar/SearchBar"
import { reducer } from "./reducer"
import { useReducer } from "react"

const HomePage = () => {
    const [ state, dispatch ] = useReducer( reducer, 
        {
            data: []
        }
    )
    return (
        <Container>
            <SearchBar
            />
        </Container>
    )
}

export { HomePage }