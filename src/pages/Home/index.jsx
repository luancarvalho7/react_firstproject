import './style.css'
import React, { useState, useEffect } from 'react'
import { Card } from '../../components/card'
export function Home() {
  const [studentName, setStudentName] = useState('user')
  const [students, setStudents] = useState([]) //Resultado Final, Function  -------- Array Começa vazio
  const [userInfo, setUserInfo] = useState({ name: 'user', pfp: 'http://lorempixel.com.br/400/400/' })
  function handleAddStudent() {
    const student = {   // Variável com as informações da pessoa + horário
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setStudents((prevState) => [...prevState, student]) //prevState não entendi muito bem como, Mas de alguma forma ele armazena o conteúdo atual; 
    // prevState é um Array, então precisa usar os ... para tirar as informações de dentro do Array, se não ficaria [[A, B, C] D]
  }


  useEffect(() => {
    if (studentName == 'user') {
      console.log('dd')
    }
    else {
      fetch(`https://api.github.com/users/${studentName}`).
        then(response => response.json())
        .then(d => {

          setUserInfo({ name: d.name, pfp: d.avatar_url })
          console.log(userInfo)

        })
        .catch(err => console.log(err))
    }
  },

    [students])

  return (
    <>
      <section className="aunk">
        <header>
          <h1 id="waz">Presence List</h1>
          <div className="identifier">
            <strong>{userInfo.name}</strong>
            <img src={userInfo.pfp} alt="Profile Picture" />
          </div>
        </header>

        <input type="text" id="inputRegister" onChange={e => setStudentName(e.target.value)} />
        <button id="btnSubmit" onClick={handleAddStudent}>Add {studentName}</button>
        <section id='cardList'>
          <Card name='Chimpanski'/>
          <Card name='Luan'/>
          {
            students.map(student => <Card
              key={student.time}
              name={student.name}
              time={student.time} />) /* Isso cria um card com as informações do student. Pelo visto array.map envia todos os arrays para esse loop */
          }

        </section>
      </section>
    </>
  )

}


