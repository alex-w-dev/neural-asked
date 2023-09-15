import type { NextApiRequest, NextApiResponse } from 'next'
import {getAuthClient} from "@/server/utils/youtube";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  let token = 'Not Found Token';
  try {
    token = (await getAuthClient(req, res).getAccessToken()).token || ''
  } catch (e) {
    /// dsa
    console.error(e)
  }
  res.send( token)
}