import { getByRole, render, screen } from "@testing-library/react";
import Header from "../components/Header";

test('Checking header component...' , () => {
    render(<Header />)

    const header = screen.getByRole('heading')

    expect(header).toBeInTheDocument()
})