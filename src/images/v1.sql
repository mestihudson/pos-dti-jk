
create table usuarios (
  id serial not null primary key,
  email varchar not null unique,
  senha varchar not null
);
