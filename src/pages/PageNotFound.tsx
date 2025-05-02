import {useState} from "react";
import {Link} from "react-router-dom";

export function PageNotFound() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-background to-muted">
            <div className="max-w-md w-full text-center space-y-6">
                <h1 className="text-9xl font-extrabold text-primary">404</h1>
                <h2 className="text-2xl font-bold">Page Not Found</h2>
                <p className="text-muted-foreground">
                    Oops! The page you're looking for seems to have gone missing. While you're here, why not play a game
                    of
                    Tic-Tac-Toe?
                </p>

                <div className="my-8">
                    <TicTacToe/>
                </div>

                <Link to="/" className="inline-flex items-center gap-2">
                    <button className="gap-2">
                        <span>Back to Home</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    const handleClick = (i: number) => {
        if (calculateWinner(squares) || squares[i]) {
            return
        }

        const newSquares = squares.slice()
        newSquares[i] = xIsNext ? "X" : "O"
        setSquares(newSquares)
        setXIsNext(!xIsNext)
    }

    const resetGame = () => {
        setSquares(Array(9).fill(null))
        setXIsNext(true)
    }

    const winner = calculateWinner(squares)
    const isDraw = !winner && squares.every((square) => square !== null)

    let status
    if (winner) {
        status = `Winner: ${winner}`
    } else if (isDraw) {
        status = "It's a draw!"
    } else {
        status = `Next player: ${xIsNext ? "X" : "O"}`
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-medium">Tic-Tac-Toe</h3>
            <div className="text-lg font-medium mb-2">{status}</div>
            <div className="grid grid-cols-3 gap-2 mb-4">
                {squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => handleClick(i)}/>
                ))}
            </div>
            <button onClick={resetGame}>
                Reset Game
            </button>
        </div>
    )
}

function Square({value, onClick}: { value: string | null; onClick: () => void }) {
    return (
        <button
            className="h-16 w-16 bg-card border border-border flex items-center justify-center text-2xl font-bold rounded-md hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            onClick={onClick}
            aria-label={value ? `Square with ${value}` : "Empty square"}
        >
            {value}
        </button>
    )
}

function calculateWinner(squares: (string | null)[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }

    return null
}
