CREATE TABLE category (
  id_category INT NOT NULL IDENTITY(1, 1),
  description VARCHAR(255) NOT NULL,
  categoria VARCHAR(60) NOT NULL,
  active INT NOT NULL DEFAULT 1,
  PRIMARY KEY(id_category)
);

CREATE TABLE provaider (
  id_provaider INT NOT NULL IDENTITY(1, 1),
  name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  active INT NOT NULL DEFAULT 1,
  nit INT NULL,
  PRIMARY KEY(id_provaider)
);

CREATE TABLE product (
  id_product INT NOT NULL IDENTITY(1, 1),
  product VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  expiration_date DATE,
  date_of_entry DATE,
  id_provaider INT NOT NULL,
  quantity INT NOT NULL,
  price_cost INT NOT NULL,
  sale_price INT NOT NULL,
  existence INT NOT NULL,
  active INT NOT NULL DEFAULT 1,
  CONSTRAINT fk_provider FOREIGN KEY (id_provaider) REFERENCES provaider (id_provaider),
  PRIMARY KEY(id_product)
);

CREATE TABLE product_category (
  id_pc INT NOT NULL IDENTITY(1, 1),
  id_product INT NOT NULL,
  id_category INT NOT NULL,
  CONSTRAINT fk_product FOREIGN KEY (id_product) REFERENCES product (id_product),
  CONSTRAINT fk_category FOREIGN KEY (id_category) REFERENCES category (id_category),
  PRIMARY KEY(id_pc)
);
