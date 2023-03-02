import type { APIRoute } from "astro";

/**
 * Use a simplified example code form Astro documentation
 * https://docs.astro.build/ru/core-concepts/endpoints/#request-1
 */
export const get: APIRoute = async ({ request }) => {
    return new Response(JSON.stringify({
        path: new URL(request.url).pathname
    }), {
        status: 200
    });
}

/**
 * Use a simplified example code form Astro documentation
 * https://docs.astro.build/ru/core-concepts/endpoints/#request-1
 */
export const post: APIRoute = async ({ request }) => {
    return new Response(JSON.stringify({
        path: new URL(request.url).pathname
    }), {
        status: 200
    });
}