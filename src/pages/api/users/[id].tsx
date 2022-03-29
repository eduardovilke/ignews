import { NextApiRequest, NextApiResponse } from "next"

export default function Users(request: NextApiRequest, response: NextApiResponse) {
  console.log(request.query)
  const users = [
    { id: 1, name: 'Eduardo'},
    { id: 2, name: 'Ingrid'},
  ]
  return response.json(users)
}