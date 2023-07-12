USE Ej1;
CREATE TABLE productos(
Id int unsigned auto_increment,
Nombre VARCHAR(20) not null,
Descripcion VARCHAR(40),
Precio DECIMAL(5,2),
Stock DECIMAL(5,2) unsigned,
primary key (Id)
);
insert into productos (Nombre,Descripcion,Precio,Stock)
values('Maiz','Vegetal',3.99,15);

SELECT * FROM productos;

ALTER TABLE productos add expiracion varchar(10);

ALTER TABLE productos MODIFY expiracion INT UNSIGNED;

ALTER TABLE productos add Fecha DATE;

ALTER TABLE productos add Activo BOOL;

ALTER TABLE productos add Categoria varchar(10);

ALTER TABLE productos add Imagen BLOB;

ALTER TABLE productos add Peso DECIMAL(5,2);

ALTER TABLE productos add Estado ENUM('Disponible', 'Agotado', 'En espera');

ALTER TABLE productos MODIFY categoria VARCHAR(40);

DESCRIBE productos;

INSERT INTO productos (ID, Nombre, Descripcion, Precio, Stock, Fecha, Activo, Categoria, Imagen, Peso, Estado)
VALUES (1, 'Producto 1', 'Descripción del producto 1', 19.99, 50, '2022-01-01', true, 'Categoría 1', NULL, 1.5, 'Disponible');
