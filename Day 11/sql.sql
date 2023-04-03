create database shoppingDB

use shoppingDB

create table products
(
	pId int primary key,
	pName varchar(20),
	pCategory varchar(20),
	pPrice int,
	pIsInStock bit
)

insert into products values(101,'Pepsi','Cold-Drink',50,1)
insert into products values(102,'IPhone','Electronics',50,1)
insert into products values(103,'Dell Lattitude','Electronics',50,0)
insert into products values(104,'Air Pods','Accessories',50,1)
insert into products values(105,'Appy','Cold-Drink',50,0)
