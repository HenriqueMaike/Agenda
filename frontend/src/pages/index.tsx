import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.scss'
import api from './api/api'
import { Formulario } from '../components/fomulario'
import 'remixicon/fonts/remixicon.css'

import "color-calendar/dist/css/theme-glass.css";

export default function Home() {

  const [agenda, setAgenda] = useState([{id: '', name: '', descricao:'', data: '', created_at:''}]);
  
  useEffect(()=>{
    async function LoadAgenda(){
      try{
        const response = await api.get('exibir');
        setAgenda(response.data)
      }catch(err){
          console.log('error')
        }
      }
    LoadAgenda();
  }, [])

async function handleDelete(id: string){
  await api.delete('deletar', {
    params:{
      id: id,
     } 
  });

  const response = await api.get('exibir');
  setAgenda(response.data)
}

  return (
    <>
      <Head>
        <title>Agenda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
            <Formulario/>
        </div>
          <div className={styles.box}>
                {agenda.map((agenda)=>{
                    return(
                      <div className={styles.dados}>
                        <p><strong>TAREFA: </strong>{agenda.name}</p>
                        <p><strong>DATA: </strong>{agenda.data}</p>
                        <strong className={styles.strong}>DESCRICAO</strong>
                        <div className={styles.descricao}>
                          <p>{agenda.descricao}</p>
                        </div>
                        <div className={styles.buttomdelete}><button onClick={()=>handleDelete(agenda.id)}><i className="ri-delete-bin-6-line"></i></button></div>
                      </div>
                    )
                })}
          </div>
      </div>
    </>
  )
}
