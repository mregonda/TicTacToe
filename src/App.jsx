import Player from "./components/player"
function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Manideep" symbol="X" ></Player>
          <Player initialName ="Player 2" symbol ="O"></Player>
          
        </ol>
        GAME Board
      </div>
      LOG
    </main>
  )
}

export default App
