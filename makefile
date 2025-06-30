.PHONY: frontend-install
frontend-install:
	@echo "Installing frontend dependencies..."
	yarn install

.PHONY: up
up:
	@echo "Starting the application..."
	docker compose up -d

.PHONY: down
down:
	@echo "Stopping the application..."
	docker compose down

.PHONY: up-fresh
up-fresh:
	@echo "Starting the application with fresh build..."
	docker compose up -d --build