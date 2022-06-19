const router = require('express').Router();

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/workers', async (req, res, next) => {
  try {
    const workers = await prisma.worker.findMany({})
    res.json(workers)
  } catch (error) {
    next(error)
  }
});

router.get('/workers/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const worker = await prisma.worker.findUnique({
        where: {
          id: Number(id)
        },
        include: { Company: true },
      })
      res.json(worker)
    } catch (error) {
      next(error)
    }
});

router.post('/workers', async (req, res, next) => {
    try {  
      const worker = await prisma.worker.create({
        data: {
          fname: req.body.fname,
          lname: req.body.lname,
          salary: req.body.salary,
          position: req.body.position,
          companyId: req.body.companyId
        }
    })
      res.json("Data Submitted Succesfully 🚀")
    } catch (error) {
      next(error)
    }
});

router.delete('/workers/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const firedWorker = await prisma.worker.delete({
      where: {
        id: Number(id)
      }
    })
    res.json(firedWorker)
  } catch (error) {
    next(error)
  }
});

router.patch('/workers/:id', async (req, res, next) => {
  try {
    const { id }  = req.params
    const worker = await prisma.worker.update({
      where: {
        id: Number(id),
      },
      data: req.body,

    })
    res.json({ message: "Worker Updated Sucessfully. 🚀" })
  } catch (error) {
    next(error)
  }
});

module.exports = router;
