import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../component_testing/Button/Button"; // Example component
import Checkbox from "../../component_testing/Checkbox/Checkbox"; // Example component

const HeroAnimation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="hero">
      <motion.div
        className="component-showcase"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Button size="lg" color="primary">Primary Button</Button>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Checkbox label="Sample Checkbox" />
        </motion.div>
      </motion.div>
      <p>Explore our beautifully crafted React components. Built for developers, designed for users.</p>
    </div>
  );
};

export default HeroAnimation;