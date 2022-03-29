set password for root@localhost="";

drop database login;
create database login;
use login;
select * from Product;
select * from Cart_Item;
insert into cart_item(user_id,product_id,product_quantity,price) values(1,1,2,4),(1,6,1,3),(2,8,1,2);
select * from user;
insert into user(id,username,password, first_name, last_name) values (1,'dat','12345','a','b'),(2,'hoang','45678','b','c');
insert into Category(name) value('abc'),('300');
insert into Product(name, description,price) values('abc','bbb',4),('def','ccc', 6),('egc','ddd',7);

select * from `order`;
select * from product;
select * from order_detail;
insert into order_detail(OrderId,ProductId) values (1,2);
insert into `order`(address,phone) values('1 xvnt','00111');
 