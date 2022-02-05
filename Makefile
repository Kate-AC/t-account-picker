.PHONY: build
build:
	docker-compose build
	docker-compose run --rm app npm install

.PHONY: run
run:
	docker-compose up

.PHONY: down
down:
	docker-compose down

.PHONY: lint
lint:
	cd app && npm run lint:fix 
