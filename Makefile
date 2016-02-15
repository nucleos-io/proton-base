start:
	@docker-compose run -p 8443:8443 \
	app npm start

build:
	@docker-compose build

test:
	@docker-compose run -p 8443:8443 \
	app npm test

.PHONY: test
