import { FormEvent, useEffect, useState } from "react";
import api from "../../pages/api/api";
import { Button } from "../ui/Button";
import { Input, TextArea } from "../ui/input";
import styles from './form.module.scss'

export function Formulario(){

    const [name, setName] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');

    type DadosProps = {
      name: string;
      descricao: string;
      data: string;
    }

    async function Agendar({name, descricao, data}: DadosProps) {
      try{
        const response = await api.post('agendar', {
          name, 
          descricao,
          data
        })

        setName('');
        setDescricao('');
        setData('');

        window.location.reload();

      }catch(err){

      }

    }

    async function handleAgendar(event: FormEvent) {
      event.preventDefault();

      let dados = {
        name,
        descricao,
        data
      }

      console.log(dados);

      await Agendar(dados);
      
    }

    return(
      <div>
        <form className={styles.form} onSubmit={handleAgendar}>
          <Input
          placeholder='Tarefa'
          type='text'
          value={name}
          onChange={(e)=>setName(e.target.value)}/>

          <TextArea
          placeholder='Descricao'
          value={descricao}
          onChange={(e)=>setDescricao(e.target.value)}
          />

          <Input
          placeholder='Data'
          type='date'
          value={data}
          onChange={(e)=>setData(e.target.value)}
          />
          <Button type="submit" >Agendar</Button>
        </form>
    </div>
    )
}