import { EnvironmentConfig } from "./core/helpers/environment_config"
import { createTablesIfNotExists } from "./core/helpers/table_creator_helper"
import { AppRoutes } from "./core/server/routes"
import { Server } from "./core/server/server"

(() => { main() })()

async function main() {
    await createTablesIfNotExists()
    new Server({
        port: EnvironmentConfig.port,
        routes: AppRoutes.routes,
    }).start()
}