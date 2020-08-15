build:
	@docker-compose build --no-cache
.PHONY: build

up:
	@docker-compose up node-app
.PHONY: up

test:
	@docker-compose run --rm test
	@docker-compose down
.PHONY: test