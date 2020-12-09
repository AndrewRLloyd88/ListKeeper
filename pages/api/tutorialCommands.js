import { getSession } from 'next-auth/client'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
  res.statusCode = 200
  res.json({ 
    Help: 'I am in a dangerous situation and I require help.',
    Stranger: "I think I am being followed.",
    Violence: "Another person I am near to is growing increasingly angry or violent.",
    Escalating: "There is a situation with more or one people and it is escalating.",
    Threatened: "I have been verbally threatened or abused.",
    Medical: "I am having a medical emergency."

 })
  } else {
    res.status(401)
    res.send("Unauthorized")
  }

}