import env from 'dotenv'
import envVar from 'env-var'

env.config()

export const envs = {
    PORT: envVar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envVar.get('PUBLIC_PATH').default('public').asString()
}

