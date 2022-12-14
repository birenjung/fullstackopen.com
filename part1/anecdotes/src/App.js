import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  //console.log(anecdotes.length);
  const [selected, setSelected] = useState({
      randomNum: 0,
      vote: new Array(anecdotes.length).fill(0)
    });
    
    let x = Math.floor((Math.random() * (anecdotes.length - 1)) + 1);
      //console.log(selected);

      const handleVote = () => {
        const x = [...selected.vote]
        x[selected.randomNum] += 1
        const y = {
          randomNum: selected.randomNum,
          vote: x
        } 
        setSelected(y);       
        console.log(x);
      }

      const handleNewAnecdote = () => {
        const newAnecdote = {
          randomNum: selected.randomNum = x,
          vote: selected.vote
        }
        setSelected(newAnecdote)
      }

      const Header = (props) => <h1>{props.text}</h1> 
      
      const Anecdote = (props) => <h3>{props.anecdote}</h3> 

      const Button = (props) => <button onClick={props.onclick}>{props.text}</button>

      const Votes = (props) => <h5>{props.text} : {props.vote}</h5>

      const highVote =  Math.max(...selected.vote);

      const highVoteAnecdote = anecdotes[(selected.vote).indexOf(highVote)];      
   
  return (
    <div>
        <Header text = "Anecdote of the day" />
        <Anecdote anecdote = {anecdotes[selected.randomNum]} />
        <Button onclick = {handleNewAnecdote} text = "New anecdote"/>
        <Votes text = "Total votes for this anecdote" vote = {selected.vote[selected.randomNum]} />
        <Button text = "Vote" onclick = {handleVote}  />
        <Header text = "Anecdote with most vote"/>
        <Anecdote anecdote = {highVoteAnecdote}/>
        <Votes text = "Total votes" vote = {highVote}/>
       
      </div>
  )
}

export default App