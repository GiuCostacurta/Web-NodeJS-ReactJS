import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
 
@Entity()
export class Alunos{
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    nome: string;
 
    @Column()
    ra: string;

    @Column()
    dataNascimento: string;

    @Column()
    endereco: string;
 
    @Column({
        default: false
    })
    matriculado: boolean;
 
    @CreateDateColumn()
    create_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
}
