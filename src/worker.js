import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;

      if (pathname === '/favicon.ico') {
        return new Response(null, { status: 404 });
      }

      const page = await getAssetFromKV(
        {
          request,
          waitUntil(promise) { return ctx.waitUntil(promise); },
        },
        {
          ASSET_NAMESPACE: env.ASSETS,
          mapRequestToAsset: (req) => {
            const url = new URL(req.url);
            if (url.pathname === '/curriculum' || url.pathname === '/contatti') {
              url.pathname = '/index.html';
              return new Request(url.toString(), req);
            }
            return mapRequestToAsset(req);
          },
        }
      );

      return page;
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  },
};
