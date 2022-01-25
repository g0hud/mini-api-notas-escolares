CREATE SEQUENCE alunos_ID_seq;

create table alunos (
  ID INTEGER PRIMARY KEY NOT NULL DEFAULT nextval('alunos_ID_seq'),
  nome   varchar
);

ALTER SEQUENCE alunos_id_seq
OWNED BY alunos.ID;

-------------------------------------------------------------------------------------------------

CREATE SEQUENCE notas_ID_seq;

create table notas (
  ID INTEGER PRIMARY KEY NOT NULL DEFAULT nextval('notas_ID_seq'),
  aluno_id INTEGER UNIQUE,
  FOREIGN KEY(aluno_id) REFERENCES alunos(id) ON DELETE CASCADE,
  n1 integer,
  n2 integer,
  n3 integer,
  n4 integer
);

ALTER SEQUENCE notas_id_seq
OWNED BY notas.ID;
