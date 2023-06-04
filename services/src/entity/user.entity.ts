import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  /**
   * Each entity must have at least one primary key column. This is a
   * requirement and you can't avoid it. To make a column a primary key,
   * you need to use the @PrimaryColumn decorator.
   *
   * Now, let's say you want your id column to be auto-generated (this
   * is known as auto-increment / sequence / serial / generated identity
   * column). To do that, you need to change the @PrimaryColumn decorator
   * to a @PrimaryGeneratedColumn decorator:
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  createdAt: string;
}

export class UserData {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  createdAt: string;
}
