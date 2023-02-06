CREATE TABLE "watchlist" (
	"id" integer NOT NULL,
	"stock_symbol" varchar(255) NOT NULL,
	"stock_name" varchar(255) NOT NULL,
	"current_price" integer(255) NOT NULL,
	"user_id" integer(255) NOT NULL
);



CREATE TABLE "public.user" (
	"id" integer NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"investment_balance" integer NOT NULL
);



CREATE TABLE "portfolio" (
	"id" serial NOT NULL,
	"stock_symbol" varchar(255) NOT NULL,
	"stock_name" varchar(255) NOT NULL,
	"buy_price" integer(255) NOT NULL,
	"sell_price" BINARY NOT NULL,
	"shares" integer(255) NOT NULL,
	"sold" BOOLEAN NOT NULL,
	"user_id" integer(255) NOT NULL,
);



ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");


ALTER TABLE "portfolio" ADD CONSTRAINT "portfolio_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");



